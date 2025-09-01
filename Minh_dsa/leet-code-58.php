/**
 * Length of Last Word
 */
<?php
 /** YÊU CẦU CỦA BÀI TOÁN TRẢ VỀ CHIỀU DÀI CỦA TỪ CUỐI CÙNG TRONG CHUỖI */
// cách 1 dùng hàm có sẵn xóa đi khoảng trắng của chuỗi sau đó chuyển chuỗi thành mảng trả về array cuối cùng
// cách 2 duyệt phần tử trong chuỗi nếu chuỗi đó gặp khoảng trắng thêm nó vào một array khác nếu ko gặp khoảng trắng chuỗi đó cứ cộng liên tục

// cách 1
    function lengthOfLastWord($s) {
        $s = trim($s);
        $words = explode(" ", $s);
        return strlen(end($words));
    }
// cách 2
   function lengthOfLastWord2($s) {
        $current ="";
        $array=[];
        for($i=0;$i<strlen($s);$i++){
            if($s[$i]!=" "){
                $current .= $s[$i];
            }
            else{
                if(strlen($current)>0){
                array_push($array,$current);
                $current = "";
            }  
            }
        }
        if(strlen($current) > 0 ){
            array_push($array,$current);

        }
        return count($array) > 0? strlen($array[count($array)-1]):1;
    }
