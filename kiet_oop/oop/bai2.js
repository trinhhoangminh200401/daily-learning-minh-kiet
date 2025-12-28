const prompt = require("prompt-sync")()
class Hinhhoc {
    constructor(){
        this.ten = ""
    }
    tinhChuVi(){

    }
    tinhDienTich(){

    }
}
class Hinhchunhat extends Hinhhoc {
    constructor(){
        super()
        this.ten = "Hình chữ nhật"
        this.dai = 0
        this.rong = 0
    }
    tinhChuVi(){
        return (this.dai + this.rong) * 2
    }
    tinhDienTich(){
        return this.dai * this.rong
    }
    nhap(){
        let chieudai = prompt("Nhập chiều dài hcn: ")
        this.dai = parseInt(chieudai)
        let chieurong = prompt("Nhập chiều rộng hcn: ")
        this.rong = parseInt(chieurong)
    }
    xuat(){
        console.log("Hình học: ", this.ten)
        console.log("Chu vi: ",this.tinhChuVi())
        console.log("Diện tích: ", this.tinhDienTich())
    }
}
class Hinhtron extends Hinhhoc {
    constructor(){
        super()
        this.ten = "Hình tròn"
        this.r = 0
        this.pi = 3.14
    }
    tinhChuVi(){
        return this.pi*2*this.r
    }
    tinhDienTich(){
        return this.pi*Math.pow(this.r,2)
    }
    nhap(){
        let bankinh = prompt("Nhập bán kính hình tròn: ")
        this.r = parseInt(bankinh)
    }
    xuat(){
        console.log("hình học: ",this.ten)
        console.log("Chu vi: ",this.tinhChuVi())
        console.log("Diện tích: ", this.tinhDienTich())
    }
}

const main = () => {
    let dsCN = [], dsHT = []
    while(true){
        console.log("=== NHAP HINH HOC ===")
        console.log("1. Nhap hinh chu nhat: ")
        console.log("2. Nhap hinh tron: ")
        console.log("3. Xuất hcn")
        console.log("4. Xuất hình tròn")
        console.log("5. Xuất tất cả")
        console.log("6. Dung nhap!!!")
        let choice = parseInt(prompt("Chọn loại hình: "))
        if (choice === 1){
            let soluong = parseInt(prompt("Nhập số lượng hình chữ nhật: "))
            for(let i = 0; i<soluong; i++){
                let chunhat = new Hinhchunhat()
                chunhat.nhap()
                dsCN.push(chunhat)
            }
        }
        else if (choice == 2){
            let soluong = parseInt(prompt("Nhập số lượng hình tron:  "))
            for(let i = 0; i<soluong; i++){
                let hinhtron = new Hinhtron()
                hinhtron.nhap()
                dsHT.push(hinhtron)
            }
        }
        else if(choice == 3){
            dsCN.forEach((chunhat) => {
                console.log(chunhat)
            })
        }
        else if(choice == 4){
            dsHT.forEach((hinhtron) => {
                console.log(hinhtron)
            })
        }
        else if(choice == 5){
            dsCN.forEach((chunhat) => {
                console.log(chunhat)
            })
            dsHT.forEach((hinhtron) => {
                console.log(hinhtron)
            })
        }
        else if(choice === 6){
            break
        }
    }
}
main()