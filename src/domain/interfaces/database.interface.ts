export interface DatabaseServiceInterface {
    getOrder(number: string): Promise<any>;
}