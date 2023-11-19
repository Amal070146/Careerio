import { privateGateway } from "../../../services/ApiGateway/ApiGateway";
import { apiRoutes } from "../../../services/ApiGateway/Endpoints";

export const getUserProjects = async () => {
    try {
        const response = await privateGateway.get(apiRoutes.getUserProjects);
        return response.data;
    } catch (error) {
        console.error("API error:", error);
        throw error;
    }
};
export const getUserDesc = async () => {
    try {
        const response = await privateGateway.get(apiRoutes.openAI);
        return response.data;
    } catch (error) {
        console.error("API error:", error);
        throw error;
    }
};
