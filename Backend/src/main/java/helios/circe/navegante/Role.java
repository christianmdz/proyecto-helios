package helios.circe.navegante;

public enum Role {
    ROLE_COMANDANTE,
    ROLE_MANDO,
    ROLE_TRIPULANTE,
    ROLE_COLONO;

    public static Role fromString(String role){
        Role enumRole = ROLE_COLONO;
        switch (role.toUpperCase()) {
            case "COMANDANTE":
                enumRole = ROLE_COMANDANTE;
                break;
            case "MANDO":
                enumRole = ROLE_MANDO;
                break;
            case "TRIPULANTE":
                enumRole = ROLE_TRIPULANTE;
                break;
        }
        return enumRole;
    }
}
