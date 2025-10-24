type SessionStatus = "unauthorized" | "authorized";

export const useSessionIsActiveChecking = () => {
    const userToken = localStorage.getItem("token");
    let status: SessionStatus = "unauthorized";

    const checkSessionStatus = (): SessionStatus => {
        status = userToken?.length ? "authorized" : "unauthorized";
        return status;
    }

    return { checkSessionStatus };
}