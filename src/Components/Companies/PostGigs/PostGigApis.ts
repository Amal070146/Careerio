import { privateGateway } from "../../../services/ApiGateway/ApiGateway";
import { apiRoutes } from "../../../services/ApiGateway/Endpoints";

export const addGig = async (data: LoginUserData) => {
    try {
        const response = await privateGateway.post(apiRoutes.login, {
            password: data.password,
            email: data.email,
        });
        console.log(response.data);
    } catch (error) {
        console.error("API error:", error);
        throw error;
    }
};

export const getGigs = async (data: LoginUserData) => {
    try {
        const response = await privateGateway.post(apiRoutes.login, {
            password: data.password,
            email: data.email,
        });
        console.log(response.data);
    } catch (error) {
        console.error("API error:", error);
        throw error;
    }
};
