import { Children, createContext , useContext , useState } from "react";

const AuthContext = createContext(null);

export const authProvider = ({Children})=>{
    const [user ,setUser] = useState(
        JSON.parse(localStorage.getItem("user"))
    );

    //login
    const login = (data) => {
      localStorage.setItem("token", data.token); //add data == setItem
      localStorage.setItem("user", JSON.stringify(data.user)); // object to string == stringify
      setUser(data.user); // state upadate
    };
    //logout
    const logout = () => {
        localStorage.clear();
        setUser(null)
    };

    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {Children}
        </AuthContext.Provider>
    )

}

export const userAuth = () => useContext(AuthContext);
