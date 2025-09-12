import { getFullYear, getFooterCopy } from "./utils";
import { getLatestNotification } from "./Notifications";

test("getFullYear returns current year", () => {
    const year = new Date().getFullYear();
    expect(getFullYear()).toBe(year);
});

test("getFooterCopy returns correct string based on isIndex parameter", () => {
    expect(getFooterCopy(true)).toBe("Holberton School");
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});

test("getLatestNotification returns correct HTML string", () => {
    expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
});