/** @format */

export const checkDescription = (description: string) => {
    return description === "" || description.replace(/\s+/, "") === ""
        ? "-"
        : description;
};
