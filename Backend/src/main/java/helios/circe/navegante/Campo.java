package helios.circe.navegante;

public enum Campo {
    LIDER,
    INGENIERIA,
    CIENCIA,
    NAVEGACION,
    NO_ASIGNADO;

    public static Campo fromString(String campo){
        Campo enumCampo = NO_ASIGNADO;
        switch (campo.toUpperCase()) {
            case "LIDER":
                enumCampo = LIDER;
                break;
            case "INGENIERIA":
                enumCampo = INGENIERIA;
                break;
            case "CIENCIA":
                enumCampo = CIENCIA;
                break;
            case "NAVEGACION":
                enumCampo = NAVEGACION;
                break;
        }
        return enumCampo;
    }
}
