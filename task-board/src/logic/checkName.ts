

export const checkName = (name: string) => {
    return name !== "" && name.replace(/\s+/, "") !== ""
}