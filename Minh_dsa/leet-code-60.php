<!-- 
CUSTOM SQRT Dùng Brute force
duyệt array từ $i đến $x nếu $x lớn hơn 2 thì return về chính nó
nếu vị trí $i * $i sấp xỉ gần bằng $x thì trả $i về
Bài này còn nhiều cách giải khác để nghiên cứu
-->
<?php  
   function mySqrt($x) {
        if ($x < 2) return $x; 
        $ans = 1;
        for ($i = 1; $i <= $x; $i++) {
            if ($i * $i <= $x) {
                $ans = $i;
            } else {
                break;
            }
        }
        return $ans;
    }


?>