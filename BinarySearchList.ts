function BinarySearchList(
    haystack: number[],
    needle: number,
): boolean {
    const midVal = Math.floor(haystack.length / 2);
    if (haystack.length === 1) return haystack[0] === needle;

    if (haystack[midVal] === needle) return true;
    if (haystack[midVal] > needle) {
        return BinarySearchList(haystack.slice(0, midVal), needle);
    } else {
        return BinarySearchList(haystack.slice(midVal), needle);
    }
}
