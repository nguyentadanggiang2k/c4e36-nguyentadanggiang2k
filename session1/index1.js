

           const shop = ["T-shirt", "Sweater"];
           let customer = prompt("Askcustomer (C,R,U,D)");
           if(customer==="R"){
                       console.log("T-shirt", "Sweater");
           }
           else if (customer === "C"){
                     const newClothes = "Jean";
                     shop.push(newClothes);
                      console.log(shop);
           }
           else if(customer ==="U"){
            shop[1] = " Skirt";
             console.log(shop);
            }
            else if(customer ==="D"){
               dp = prompt("Delete position: ");
               shop.splice(dp-1,1);
                console.log(shop);
            }




        // let flock = [5, 7, 300, 90, 24, 50, 75];
        // console.log("Hello, my name is Giang and these are my sheep sizes:",flock)
        // let max = flock[0]
        // for(i = 0; i < flock.length; i++){
        //     if (max < flock[i])
        //     {
        //         max = flock[i]
        //     }
        // }console.log(now my biggest sheep has size ${max}, let shear it)
        // flock[2]=8
        // console.log("after shearing, here is my flock:",flock)
        // let flock1=[5, 7, 300, 90, 24, 50, 75]
        // console.log("Hello, my name is Tung and these are my sheep sizes:",flock1)
        // for(let m = 1; m < 4; m++)
        // {
        // for(let i = 0; i < flock1.length; i++)
        // {
        //     flock1[i]=flock1[i]+50
        
        // }
        // console.log("month", m)
        // console.log("one month has passed, now here is my flock:",flock1)
        // let max = flock1[0]
        // for(i=0; i < flock1.length; i++){
        //     if (max < flock1[i])
        //     {
        //         max = flock1[i]
        //     }
        // }console.log(now my biggest sheep has size ${max}, let shear it)
        // const indexofsheep=flock1.indexOf(max)
        // flock1[indexofsheep]=8
        // console.log("after shearing, here is my flock:",flock1)
        // }
        // let sum = 0
        // for (let i = 0; i < flock1.length; i++)
        // {
        //     sum = sum +flock1[i]
        // }
        // console.log("my flock has total is size:",sum)
        // let profit = sum*2
        // console.log("I would get", profit, "$")
           

        //1.lets you create arrays inside arrays, known as nested arrays
        // 2.can not   