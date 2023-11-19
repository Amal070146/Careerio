import { privateGateway } from "../../../services/ApiGateway/ApiGateway";
import { apiRoutes } from "../../../services/ApiGateway/Endpoints";

export const addGig = async (data: GigFormData) => {
    try {
        const response = await privateGateway.post(apiRoutes.addGig, {
            role: data.title,
            companyname: data.companyName,
            description: data.description,
            keyresponsibilities: data.responsibilities,
			qualifications: data.qualifications,
			duration: data.duration,
			amount: data.budget,
            skills: data.skills.join(", "),
        });
        console.log(response.data);
    } catch (error) {
        console.error("API error:", error);
        throw error;
    }
};

export const getGigs = async () => {
    try {
        const response = await privateGateway.get(apiRoutes.getAllGigs);
        return response.data;
    } catch (error) {
        console.error("API error:", error);
        throw error;
    }
};
