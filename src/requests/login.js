export const login = async (email, password) => {

    const url = "walla"

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ 
                email: email, 
                password: password 
            }),
        });

        const responseJson = await response.json();

        if (respons.status === 200 || response.status === 201) {
            // Ändra här ->
            console.log("Login successful");
            return responseJson;
        } else {
            console.log("Login failed");
            return responseJson;
            // <- Ändra här
        }
    } catch (error) {
        // Ändra här ->
        console.log("Login failed");
        return error;
        // <- Ändra här
    }
};