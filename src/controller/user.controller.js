import { asyncHandler } from "../utiles/AsyncHandler.js";
import { ApiError } from "../utiles/ApiError.js";
import { User } from "../models/users.model.js";
import { uploadOnCloudinary } from "../utiles/Cloudinary.js";
import { ApiResponse } from "../utiles/ApiResponse.js";

const registerUser = asyncHandler(async (req, res)=>{
    //get user details from frontend 
    //validation all possible value 
    //check if user already exists (by username or emails )
    //check for images ,check for avatar
    //upload them to cloudnary ,    avatar
    //create user objects - create entry in DB
    //remove password and refresh token from response 
    //check user creation 
    //return response 

    const {fullname, email, username, password} = req.body
    console.log("email   ",email , username , fullname);

    if([fullname, username, password, email].some((field) =>field ?.trim()==="")){  // for check all the field 
        throw new ApiError(400, "All fields are required ")
    }
     const existedUser = await User.findOne({
        $or: [{ username },{ email }]
     })

     if (existedUser) {
        throw new ApiError(409, "User name already exist ")
     }
    //   console.log(req.files);
     const avatarlocalpath = req.files?.avatar[0].path;
    //  const coverlocalpath = req.files?.coverImage[0].path   // in this case if empty it show error even not required 

    // coverImage check if empty 
    let coverlocalpath ;
    if(req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0 ){
        coverlocalpath = req.files.coverImage[0].path;
    }

     if(!avatarlocalpath){
        throw new ApiError(400, " Avatar should not blanck")
     }

    const avatar =  await uploadOnCloudinary(avatarlocalpath);
    const coverImage = await uploadOnCloudinary(coverlocalpath);

    if(!avatar){
        throw new ApiError(400, " Avatar should not blanck after upload ")
     }
    
    const user = await User.create(
        {
            fullname,
            avatar: avatar.url,
            coverImage: coverImage?.url || "",
            email,
            password,
            username: username.toLowerCase()
        }
     )

     const createdUser = await User.findById(user._id).select(
        "-password -refeshToken"
     )
     if(!createdUser){
        throw new ApiError(500, "somthing went wrong while registring user ")
     }

     return res.status(201).json(

     new ApiResponse(200, createdUser, "User Register Successfully")
    
    )
})  


/*
const registerUser = asyncHandler(async (req, res)=>{
    res.status(200).json({
        message : "this is first response",
        pp : "maza aane laga hai :)",
        data:"jitna chaho bhejo "
    })
})

*/

export {registerUser}