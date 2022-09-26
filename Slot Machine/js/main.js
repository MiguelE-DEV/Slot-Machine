let total = 10000
document.querySelector('#total').innerText = total
let star = 'star.jpg'
let apple = 'apple.jpg'
let banana ='banana.jpg'
let cherry = 'cherry.jpg'
let lemon = 'lemon.jpg'
const fruit =[star,apple,banana,cherry,lemon]
document.querySelector('#smolBet').addEventListener('click',spinS)
document.querySelector('#midBet').addEventListener('click',spinM)
document.querySelector('#lrgBet').addEventListener('click',spinL)

function rng(){ 
    let random = Math.floor(Math.random()* fruit.length)
    console.log(fruit[random])
    return(fruit[random])
}

function spinS(){
    if(total < 10){
    document.querySelector('#result').innerText = "Game Over!"
    }
    if(total > 0){
        let left = rng()
        let leftImg = document.querySelector('#left')
        leftImg.innerText = left
        
        let mid = rng()
        let midImg = document.querySelector('#mid')
        midImg.innerText = mid
        
        let right = rng()
        let rightImg = document.querySelector('#right')
        rightImg.innerText = right

        if(left == mid && left == right && total >= 10){
        total = total -= 10
        total = total += 100
        document.querySelector('#total').innerText = total
        document.querySelector('#result').innerText = "Win!"
        console.log('Win')
        }
        else if(total >= 10){
        total = total -= 10
        document.querySelector('#total').innerText = total
        document.querySelector('#result').innerText = "Try Again!"
        console.log('Try Again')
        }
    }
    else{
        console.log('Game Over')
        document.querySelector('#result').innerText = "Game Over!"
    }

}

function spinM(){
    if(total < 100){
        document.querySelector('#result').innerText = "Not Enough Cash!"
        return
    }
    if(total > 0 || total < 100){
        let left = rng()
        let leftImg = document.querySelector('#left')
        leftImg.innerText = left
        
        let mid = rng()
        let midImg = document.querySelector('#mid')
        midImg.innerText = mid
        
        let right = rng()
        let rightImg = document.querySelector('#right')
        rightImg.innerText = right

        if(left == mid && left == right && total >= 100){
        total = total -= 100
        total = total += 1000
        document.querySelector('#total').innerText = total
        console.log('Win')
        document.querySelector('#result').innerText = "Win!"
        }
        else if(total >= 100){
        total = total -= 100
        document.querySelector('#total').innerText = total
        console.log('Try Again')
        document.querySelector('#result').innerText = "Try Again!"
        }
    }
    else{
        console.log('Game Over')
        document.querySelector('#result').innerText = "Game Over!"
    }

}

function spinL(){
    if(total < 1000){
        document.querySelector('#result').innerText = "Not Enough Cash!"
        return
    }
    if(total > 0){
        let left = rng()
        let leftImg = document.querySelector('#left')
        leftImg.innerText = left
        
        let mid = rng()
        let midImg = document.querySelector('#mid')
        midImg.innerText = mid
        
        let right = rng()
        let rightImg = document.querySelector('#right')
        rightImg.innerText = right

        if(left == mid && left == right && total >= 1000){
        total = total -= 1000
        total = total += 10000
        document.querySelector('#total').innerText = total
        console.log('Win')
        document.querySelector('#result').innerText = "Win!"
        }
        else if(total >= 1000){
        total = total -= 1000
        document.querySelector('#total').innerText = total
        console.log('Try Again')
        document.querySelector('#result').innerText = "Try Again"
        }
    }
    else{
        console.log('Game Over')
        document.querySelector('#result').innerText = "Game Over!"
    }
}