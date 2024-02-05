import { capitalize } from "./Utils"

test('should give Superman for superman',()=>{
    expect(capitalize("superman")).toBe("Superman")
})

test('should give Abc for ABC',()=>{
    expect(capitalize("ABC")).toBe("Abc")
})

test('should give Manohar for MaNoHar',()=>{
    expect(capitalize("MaNoHar")).toBe("Manohar")
})

test('should give "" for ""',()=>{
    expect(capitalize("")).toBe("")
})

test('should give "123" for "123"',()=>{
    expect(capitalize("123")).toBe("123")
})


test('should not give "abc" for "abc"',()=>{
    expect(capitalize("abc")).not.toBe("abc")
})

test('should not give "Amitabh" for "aBc"',()=>{
    expect(capitalize("abc")).not.toBe("abc")
})



test('should not give "Amitabh" for "aBc"',()=>{
   // 
})