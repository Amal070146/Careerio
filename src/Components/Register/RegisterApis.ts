import { privateGateway } from "../../services/ApiGateway/ApiGateway";
import { apiRoutes } from "../../services/ApiGateway/Endpoints";

export const registerUser = async (data:RegisterUserData) => {
    try {
        const response = await privateGateway.post(apiRoutes.register, {
			username: data.fullName,
			password: data.password,
			email: data.email
		});
        console.log(response.data);
    } catch (error) {
        console.error("API error:", error);
		throw error
    }
}

export const loginUser = async (data: LoginUserData) => {
    try {
        const response = await privateGateway.post(apiRoutes.login, {
			password: data.password,
			email: data.email
		});
		const userData: userData = {
			id: response.data.id,
			username: response.data.username,
			email: response.data.email
		}
        console.log(response.data);
		localStorage.setItem("accessToken", response.data.token);
		localStorage.setItem("userData", JSON.stringify(userData));
    } catch (error) {
        console.error("API error:", error);
		throw error
    }
}