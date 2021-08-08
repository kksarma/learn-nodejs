// arr = [3,1,3,5,-1]


// // given array find the maximum sum you could form from the elements given that you can't pick adjacent numbers.

// let max = 0;
// for(let i = 0; i <= arr.length; i++) {
//   for(let j = i; j < arr.length - 1; j = j + 2 ) {
//       const m = m + arr[j];
//       if(max > m) {
//           max = m;
//       }
//   }
// }


// U223

Unable to init Braintree for Stored/Add Wallet Item form.

{
  "id": 1,
  "status": 0,
  "email": "admin@example.com",
  "email_verified_at": null,
  "first_name": "The",
  "last_name": "Admin",
  "firebase_uid": "0",
  "mobile": "+919898982347",
  "primary_address_line1": "dfgfg,\nfwfwffwf,\nwfwfwff",
  "primary_address_line2": "wqedqwwfwfewf",
  "secondary_address_line1": "fdbdfb, ewfdwfwf\nwfwfwfw",
  "secondary_address_line2": "fwfwfwfewfewfw",
  "questionnaire_status": 1,
  "age": 22,
  "gender": 0,
  "bmi": "22.3",
  "recommended_calories": 1400,
  "created_at": "2021-02-11T14:52:45.000000Z",
  "updated_at": "2021-03-31T12:30:40.000000Z",
  "roles": [
    {
      "id": 2,
      "name": "Admin",
      "slug": "admin",
      "created_at": "2021-02-11T14:52:40.000000Z",
      "updated_at": "2021-02-11T14:52:40.000000Z",
      "pivot": {
        "user_id": 1,
        "role_id": 2
      }
    }
  ]
},
{
  "id": 147,
  "status": 0,
  "email": "accountant@dd.com",
  "email_verified_at": null,
  "first_name": "accountant",
  "last_name": "dd",
  "firebase_uid": "22a19ad1-6405-4315-9b66-1e7a448c7220",
  "mobile": "123456789",
  "primary_address_line1": null,
  "primary_address_line2": null,
  "secondary_address_line1": null,
  "secondary_address_line2": null,
  "questionnaire_status": 0,
  "age": 0,
  "gender": 0,
  "bmi": null,
  "recommended_calories": 0,
  "created_at": "2021-04-09T14:20:49.000000Z",
  "updated_at": "2021-04-09T14:20:49.000000Z",
  "roles": [
    {
      "id": 4,
      "name": "Accountant",
      "slug": "accountant",
      "created_at": "2021-02-11T14:52:43.000000Z",
      "updated_at": "2021-02-11T14:52:43.000000Z",
      "pivot": {
        "user_id": 147,
        "role_id": 4
      }
    }
  ]
},
{
  "id": 25,
  "status": 0,
  "email": "consultant@gmail.com",
  "email_verified_at": null,
  "first_name": "Consultant",
  "last_name": "User",
  "firebase_uid": "0",
  "mobile": "9988998800",
  "primary_address_line1": null,
  "primary_address_line2": null,
  "secondary_address_line1": null,
  "secondary_address_line2": null,
  "questionnaire_status": 1,
  "age": 16,
  "gender": 1,
  "bmi": "27.8",
  "recommended_calories": 1200,
  "created_at": "2021-02-11T14:52:45.000000Z",
  "updated_at": "2021-04-06T16:38:25.000000Z",
  "roles": [
    {
      "id": 3,
      "name": "Consultant",
      "slug": "consultant",
      "created_at": "2021-02-11T14:52:43.000000Z",
      "updated_at": "2021-02-11T14:52:43.000000Z",
      "pivot": {
        "user_id": 25,
        "role_id": 3
      }
    }
  ]
},
{
  "id": 149,
  "status": 0,
  "email": "kitchen@dd.com",
  "email_verified_at": null,
  "first_name": "kitchen",
  "last_name": "kitchen",
  "firebase_uid": "de58085c-f6ec-421d-8e3f-dacabcdbbf4d",
  "mobile": "123456123",
  "primary_address_line1": null,
  "primary_address_line2": null,
  "secondary_address_line1": null,
  "secondary_address_line2": null,
  "questionnaire_status": 0,
  "age": 0,
  "gender": 0,
  "bmi": null,
  "recommended_calories": 0,
  "created_at": "2021-04-09T14:23:23.000000Z",
  "updated_at": "2021-04-09T14:23:23.000000Z",
  "roles": [
    {
      "id": 5,
      "name": "Kitchen",
      "slug": "kitchen",
      "created_at": "2021-02-11T14:52:44.000000Z",
      "updated_at": "2021-02-11T14:52:44.000000Z",
      "pivot": {
        "user_id": 149,
        "role_id": 5
      }
    }
  ]
}

"Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem."

Admin credentials

u - admin@example.com

p - password

 
Accountant credentials

u - accountant@dd.com

p - password

 

Consultant Credentials
u - consultant@gmail.com

p - password

 

Kitchen Credentials

u - kitchen@dd.com

p - password





useEffect((e)=>{
    async function getCoordinates(){
         console.log('I AM CALLING',clinics)
         const newPositions = [];
         for (const item of clinics) {
		    const reasons = await fetch("https://maps.googleapis.com/maps/api/geocode/json?address="+parseInt(item.address.zip)+'&key='+'AIzaSyAGcZkQXYOaBzae04r2w8I1mzcLMerX37I');
		    const latitude = data && data.results && data.results.length && data.results[0].geometry && data.results[0].geometry.location.lat;
      		const longitude = data && data.results && data.results.length && data.results[0].geometry && data.results[0].geometry.location.lng;

      		newPositions.push({...item, let: latitude || 0, lon: longitude || 0 });
	     }
	     console.log('newPositions ', newPositions);
	     setPosition(newPositions);
    }

   clinics && clinics.length && getCoordinates();
}, []);