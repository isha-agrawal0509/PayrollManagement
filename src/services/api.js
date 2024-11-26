// API function for fetching salary slips
export const getSalarySlip = (employeeId) => {
    return fetch(`/api/employees/${employeeId}/salary-slip`)  // Ensure the URL uses proper backticks for template literals
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch salary slip");
            }
            return response.json();
        })
        .catch((err) => {
            console.error("Error fetching salary slip:", err);
            throw err;
        });
};
