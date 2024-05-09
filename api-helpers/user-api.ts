import { Page, request } from '@playwright/test';

export function createRandomUsername(length: number): string {
    let username = 'Test1_';
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        username += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return username;
}

export class UserApi {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async registerUser(username: string, password: string) {
        const registrationEndpoint = process.env.BASE_API_URL + '/api/users/register';
    
        const response = await this.page.request.post(registrationEndpoint, {            
            data: {
                name: username,
                email: username + '@czechitas.cz',
                password: password
            }
        });
        
        return response;
    }
}

