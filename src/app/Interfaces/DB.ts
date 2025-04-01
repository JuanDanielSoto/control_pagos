interface DatosUsuario {
    usuario: string,
    deudores?: Deudores[],
    liquidados?: Liquidados[]
}

interface Deudores {
    id: string,
    nombre: string,
    phone: string,
    foto?: string
    monto_total: number,
    conceptos?: Conceptos[]
}

interface Conceptos {
    concepto : string,
    descripcion : string,
    monto: number,
    comprobante?: string,
    fecha : string,
    metodo_pago : string,
    pagos? : Pagos[],
    label : string
}

interface Pagos {
    fecha: string,
    monto: number,
    metodo_pago: string,
    nota : string,
    evidencia? : string
}

interface Liquidados {
    conceptos? : Conceptos[],
    fecha_liquidado : string
}

