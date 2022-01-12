alert('Bạn có phải là thành viên của III.12 hay là không?')
function maudo(){
    document.getElementById('pharagrap').style.color='red'
}
function mauxanh(){
    document.getElementById('pharagrap').style.color='Chartreuse'
}
function mauvang(){
    document.getElementById('pharagrap').style.color='wheat'
}

function reset() {   
    pharagrap.innerHTML = 'Đọc xong đừng vui quá nhé các bạn <i class="fas fa-camera"></i> <br>Chúc các bạn một ngày vui vẻ      '
}   
// sử lí ảnh

function changeImage(id){
    let imagePath = document.getElementById(id).getAttribute('src');
    document.getElementById('img-main').setAttribute('src', imagePath)
}
//sử lí lọc sản phẩm
function changeProductList(type,element)
{
    let tabs= document.getElementsByClassName('tab-item');
    for(i=0;i<tabs.length;i++){
        tabs[i].style.background = '#b14c38'
    }
    element.style.background='#ee4d2d'
    document.getElementById(type).style.display='block';
    switch(type){
        case 'trend':
            document.getElementById('new').style.display='none';
            document.getElementById('best-sell').style.display='none';
            document.getElementById('mai').style.display='none';
            document.getElementById('tam').style.display='none';
            document.getElementById('yen').style.display='none';
            document.getElementById('Thoa').style.display='none';
            beark;
        case 'new':
            document.getElementById('trend').style.display='none';
            document.getElementById('best-sell').style.display='none';
            document.getElementById('mai').style.display='none';
            document.getElementById('tam').style.display='none';
            document.getElementById('yen').style.display='none';
            document.getElementById('Thoa').style.display='none';

            beark;
        case 'best-sell':
            document.getElementById('new').style.display='none';
            document.getElementById('trend').style.display='none';
            document.getElementById('mai').style.display='none';
            document.getElementById('tam').style.display='none';
            document.getElementById('yen').style.display='none';
            document.getElementById('Thoa').style.display='none';
            beark; 
        // case 'Thoa':
        //     document.getElementsById('best-sell').style.display='none';
        //     document.getElementById('new').style.display='none';
        //     document.getElementById('trend').style.display='none';
        //     document.getElementById('mai').style.display='none';
        //     document.getElementById('tam').style.display='none';
        //     document.getElementById('yen').style.display='none';
        //     beark;
        // case 'yen':
        //         document.getElementById('new').style.display='none';
        //         document.getElementById('trend').style.display='none';
        //         document.getElementById('mai').style.display='none';
        //         document.getElementById('tam').style.display='none';
        //         document.getElementById('best-sell').style.display='none';
        //         document.getElementById('Thoa').style.display='none';
        //         beark; 
    }
}