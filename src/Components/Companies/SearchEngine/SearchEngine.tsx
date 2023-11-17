import axios from "axios";
import { useEffect } from "react";

type Props = {};

export const SearchEngine = (_props: Props) => {
    useEffect(() => {
		BecknService.search({});
	}, []);

    return <div>SearchEngine</div>;
};

const BECKN_BAP_URL = "http://localhost:5003"; // Replace with your BAP server URL

const BecknService = {
    search: async (searchCriteria: any) => {
        const payload = {
            context: {
                domain: "dsep:talent", // Replace with actual value
                action: "search",
                core_version: "1.1.0", // Replace with actual value
                bpp_id: "jenin.onest:work-opportunities.BPP", // Replace with actual bpp_id
                bpp_uri: "https://jenin82.loca.lt", // Replace with actual bpp_uri
            },
            message: searchCriteria,
        };

        try {
            const response = await axios.post(
                `${BECKN_BAP_URL}/search`,
                payload
            );
            return response.data;
        } catch (error) {
            console.error("Error in BECKN search request:", error);
            throw error;
        }
    },
};

export default BecknService;
