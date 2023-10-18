import axios from "@/utils/axios";
import useSWRImmutable from "swr/immutable";

export const useNewsletters = () => {
    const {
        data: newsletters,
        isLoading,
        mutate,
    } = useSWRImmutable(
        "/api/newsletter",
        async () => {
            const response = await axios.get("/api/newsletter");

            return response.data;
        },
        {
            shouldRetryOnError: false,
        }
    );

    return {
        newsletters,
        isLoading,
        mutate,
    };
};
