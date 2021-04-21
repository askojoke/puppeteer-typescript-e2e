import { expect } from 'chai';
import { UsersApi } from "../api/usersApi"

const usersApi: UsersApi = new UsersApi();

describe('Book Store Application', () => {

    test('should get "false" from Book Store API - /Account/v1/Authorized', async () => {
        await usersApi.isAuthorized('asko', 'Pa$sw0rd')
            .then(async (response) => {
                expect(response.data).to.equal(false);
                expect(response.status).to.equal(200);
            })
            .catch(async (error) => {
                const data = JSON.stringify(error.response.data);
                console.log('---LOGGING--- ' + data + ' ---LOGGING---');
            })
    });

    test('should get error when body is empty from Book Store API - /Account/v1/Authorized', async () => {
        await usersApi.isAuthorizedEmptyBody()
            .catch(async (error) => {
                const data = JSON.stringify(error.response.data);
                console.log('---LOGGING--- ' + data + ' ---LOGGING---');
                expect(error.response.data).to.deep.include({"message": "UserName and Password required."});
            })
    });

    test('should get error when only 1 param is defined from Book Store API - /Account/v1/Authorized', async () => {
        await usersApi.isAuthorizedEmptyPassword('asko')
            .catch(async (error) => {
                const data = JSON.stringify(error.response.data);
                console.log('---LOGGING--- ' + data + ' ---LOGGING---');
                expect(error.response.data).to.deep.include({"message": "UserName and Password required."});
            })
    });

    test('should get error when password is incorrect from Book Store API - /Account/v1/Authorized', async () => {
        await usersApi.isAuthorized('asko', 'WrongPassword')
            .catch(async (error) => {
                const data = JSON.stringify(error.response.data);
                console.log('---LOGGING--- ' + data + ' ---LOGGING---');
                expect(error.response.data).to.deep.include({"message": "User not found!"});
            })
    });

    test('should create user, create token and delete user from Book Store API - /Account/v1/Authorized', async () => {
        let userID: any;
        let token: any;
        const userName: string = 'user10';
        const password: string = 'Pa$sw0rd';
        await usersApi.createUser(userName, password)
            .then(async (response) => {
                expect(response.status).to.equal(201);
                expect(response.data).to.deep.include({"username": userName});
                userID = await response.data.userID
                console.log('---USERID--- ' + userID + ' ---USERID---');
            })
            .catch(async (error) => {
                console.log('---CREATE USER ERROR--- ' + error + ' ---CREATE USER ERROR---');
            })

        await usersApi.generateToken(userName, password)
            .then(async (response) => {
                expect(response.status).to.equal(200);
                expect(response.data).to.deep.include({"status": "Success"});
                token = await 'Bearer ' + response.data.token
                console.log('---TOKEN--- ' + token + ' ---TOKEN---');
            })
            .catch(async (error) => {
                const data = JSON.stringify(error.response.data);
                console.log('---GENERATE TOKEN ERROR--- ' + data + ' ---GENERATE TOKEN ERROR---');
            })

        await usersApi.isAuthorized(userName, password)
            .then(async (response) => {
                expect(response.data).to.equal(true);
                expect(response.status).to.equal(200);
            })
            .catch(async (error) => {
                const data = JSON.stringify(error.response.data);
                console.log('---AUTHORIZED LOGGING--- ' + data + ' ---AUTHORIZED LOGGING---');
            })
        
        await usersApi.getUser(userID, token)
            .then(async (response) => {
                const data = JSON.stringify(response.data);
                console.log('---GET USER LOGGING--- ' + data + ' ---GET USER LOGGING---');
                expect(response.data).to.deep.include({"username": userName});
            })
            .catch(async (error) => {
                const data = JSON.stringify(error.response.data);
                console.log('---GET USER ERROR--- ' + data + ' ---GET USER ERROR---');
            })

        await usersApi.deleteUser(userID, token)
            .then(async (response) => {
                const data = JSON.stringify(response.data);
                console.log('---DELETE USER LOGGING--- ' + data + ' ---DELETE USER LOGGING---');
                expect(response.status).to.equal(204);
            })
            .catch(async (error) => {
                const data = JSON.stringify(error.response.data);
                console.log('---DELETE USER ERROR--- ' + data + ' ---DELETE USER ERROR---');
            })

        await usersApi.getUser(userID, token)
            .catch(async (error) => {
                const data = JSON.stringify(error.response.data);
                console.log('---GET NO USER ERROR--- ' + data + ' ---GET NO USER ERROR---');
                expect(error.response.data).to.deep.include({"message": "User not found!"});
            })
    });
});
 