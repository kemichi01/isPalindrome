function isPalindrome(str) {
    for (let i = 0, j = str.length-1 ; i<str.length/2; i++, j--){
        if (str[i] != str[j]){
            return false;
        }else
            return true;
    }
}
console.log(isPalindrome(prompt("nhap chuoi")));

