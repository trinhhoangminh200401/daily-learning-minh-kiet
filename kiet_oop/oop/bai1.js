const prompt = require ("prompt-sync")();
class Xe {
    constructor(){
        this.hoten = "";
        this.sogio = 0;
        this.tienthue = 0;
    }
    tinhTienThue(){
        if(this.sogio == 1){
           this.tienthue= 10000;
        }
        else if(this.sogio > 1){
            this.tienthue = 10000 + (this.sogio * 80000);
        }
    }
    nhapThongTin(){
        this.hoten = prompt("Nhập họ tên: ");
        let inputGio = prompt("Nhập số giờ");
        this.sogio = parseInt(inputGio);
        if(isNaN(this.sogio) || this.sogio < 0){
            console.log("Số giờ không hợp lệ. Vui lòng nhập lại.");
            this.nhapThongTin();
        }
    }
    xuatThongTin(){
        console.log("Họ tên: " + this.hoten);
        console.log("Số giờ: " + this.sogio);
        console.log("Tiền thuê: " + this.tienthue);
    }
}

class Xedap extends Xe {
    constructor(){
        super();
    }
    xuatThongTin(){
        super.xuatThongTin();
        console.log("Loại xe: Xe đạp")
    }
}

class Xemay extends Xe {
    constructor(loaixe, bienso){
        super();
        this.loaixe = 0;
        this.bienso = "";
    }
    nhapThongTin(){
        super.nhapThongTin();
        let phankhoi =  prompt("Nhập loại xe: ");
        this.loaixe = parseInt(phankhoi);
        this.bienso = prompt("Nhập biển số: ");
    }
    tienthue(){
        let giacoban = 0;
        if(this.loaixe === 100){
            giacoban = 15000
        } else if (this.loaixe === 250){
            giacoban = 20000
        }
        this.tienthue = giacoban * this.sogio;
    }
    xuatThongTin(){
        super.xuatThongTin();
        console.log("Loại xe: " + this.loaixe);
        console.log("Biển số: " + this.bienso);
    }
}

class Cuahang {
    // Danh sách các xe nhap xuất
    constructor(){
        this.danhsachxe = []
    }
    // Thêm xe vào danh sách
    themXe(xe){
        xe.tinhTienThue();
        this.danhsachxe.push(xe);
    }

    // Xuất tất cả thông tin liên quan đến cho thuê xe đạp
    xuatTatCaThongTin(){
        console.log("Danh sách thuê xe: ")
        this.danhsachxe.forEach((xe, index) => {
            console.log(`Xe thứ ${index + 1}:`)
            xe.xuatThongTin();
        });
    }
    tongTienXeDap(){
        let tongtien = 0
        this.danhsachxe.forEach((xe) => {
            if(xe instanceof Xedap){
                tongtien += xe.tienthue;
            }
        });
        return tongtien;
    }
    tongTienXeMay(){
        let tongtien = 0
        this.danhsachxe.forEach((xe) => {
            if(xe instanceof Xemay){
                tongtien += xe.tienthue;
            }
        });
        return tongtien;
    }
    // Tính tổng tiền cho thuê xe máy loại 250 phân khối
    tongTienXeMay250(){
        let tongtien = 0
        this.danhsachxe.forEach((xe) => {
            if(xe instanceof Xemay && xe.loaixe === 250){
                tongtien += xe.tienthue; 
            }
        });
        return tongtien;
    }
}

const main = () => {
    const cuahang = new Cuahang();
    while(true){
        console.log("1. Thuê xe đạp: ")
        console.log("2. Thuê xe máy: ")
        console.log("3. Tát cả thông tin thuê xe: ")
        console.log("4. Tổng tiền thuê xe đạp và xe máy: ")
        console.log("5. Tất cả thông tin của việc thuê xe đạp: ")
        console.log("6. Tổng tiền thuê xe máy 250 phân khối: ")
        console.log("7. Thoát  ")
        let choice = prompt("Chọn chức năng: ")
        if(choice == 1){
            const xeDap = new Xedap();
            xeDap.nhapThongTin();
            cuahang.themXe(xeDap);
        }
        else if(choice == 2){
            const xeMay = new Xemay();
            xeMay.nhapThongTin();
            cuahang.themXe(xeMay);
        }
        else if(choice == 3){
            cuahang.xuatTatCaThongTin();
        }
        else if(choice == 4){
            console.log("Tổng tiền thuê xe đạp và xe máy: ", cuahang.tongTienXeDap() + cuahang.tongTienXeMay());
        }
        else if(choice == 5){
            console.log("Tất cả thông tin của việc thuê xe đạp: ");
            cuahang.danhsachxe.forEach((xe) => {
                if(xe instanceof Xedap){
                    xe.xuatThongTin();
                }
            });
            console.log("Tổng tiền thuê xe đạp: ", cuahang.tongTienXeDap());
        }
        else if(choice == 6){
            console.log("Tổng tiền thuê xe máy 250 phân khối: ", cuahang.tongTienXeMay250());
        }   
        else if(choice == 7){
            break;
        }
    }
}

main();