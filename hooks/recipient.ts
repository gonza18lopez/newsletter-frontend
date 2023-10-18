import axios from "@/utils/axios";
import useSWRImmutable from "swr/immutable";

export const useRecipients = () => {
    const {
        data: recipients,
        isLoading,
        mutate,
    } = useSWRImmutable("/api/newsletter/recipients", async () => {
        const response = await axios.get("/api/newsletter/recipients");

        return response.data;
    });

    return {
        recipients,
        isLoading,
        mutate,
    };
};
