import { privateGateway } from "../../../services/ApiGateway/ApiGateway";
import { apiRoutes } from "../../../services/ApiGateway/Endpoints";

export const addProject = async (data: ProjectFormData) => {
    try {
        const response = await privateGateway.post(apiRoutes.addProject, {
            title: data.title,
			companyname: data.companyName,
			description: data.description,
			deliverables: data.deliverables,
			stack: data.skills.join(", "),
			contributers: "Amal, Ajay, Jenin",
        });
        console.log(response.data);
    } catch (error) {
        console.error("API error:", error);
        throw error;
    }
};
