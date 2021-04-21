import axios from 'axios';

export class UsersApi {
    public async isAuthorized(userName: string, password: string) {
        return axios.post('https://demoqa.com/Account/v1/Authorized', {
            userName: userName,
            password: password
          })
    }

    public async isAuthorizedEmptyBody() {
        return axios.post('https://demoqa.com/Account/v1/Authorized')
    }

    public async isAuthorizedEmptyPassword(name: string) {
        return axios.post('https://demoqa.com/Account/v1/Authorized', {
            userName: name
          })
    }

    public async createUser(userName: string, password: string) {
        return axios.post('https://demoqa.com/Account/v1/User', {
            userName: userName,
            password: password,
            Accept: "application/json",
      })
    }

    public async generateToken(userName: string, password: string) {
        return axios.post('https://demoqa.com/Account/v1/GenerateToken', {
            userName: userName,
            password: password
          })
    }

    public async getUser(userId: string, token: string) {
        return axios.get(`https://demoqa.com/Account/v1/User/${userId}`, {
            headers: {
                "Accept": "application/json",
                "Authorization": token
            }
        })
    }

    public async deleteUser(userId: string, token: string) {
        return axios.delete(`https://demoqa.com/Account/v1/User/${userId}`, {
            headers: {
                "Accept": "application/json",
                "Authorization": token
            }
        })
    }
}