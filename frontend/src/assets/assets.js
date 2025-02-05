import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import Dermatologist from './Dermatologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: ' Chef',
        image: General_physician
    },
    {
        speciality: 'Classes',
        image: Gynecologist
    },
    {
        speciality: 'Testing',
        image: Dermatologist
    },
    {
        speciality: 'Nutrition',
        image: Pediatricians
    },
    {
        speciality: 'Recipes',
        image: Neurologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Sunaina Chopra',
        image: doc1,
        speciality: 'The South Indian Spice Expert',
        degree: 'Hotel Management',
        experience: '20 Years',
        about: 'Experienced Chef with Over 20 Years of Culinary Excellence, Specializing in Heart-Healthy Gourmet Meals. Known for Personalized Service and a Commitment to Fresh, Organic Ingredients',
        fees: 500,
        address: {
            line1: 'Greater Noida, Uttar Pradesh, 20130, India',
            line2: 'Greater Noida, Uttar Pradesh, 20130, India'
        }
    },
    {
        _id: 'doc2',
        name: 'Anjali Nair',
        image: doc2,
        speciality: 'Fusion Foodie',
        degree: 'Hotel Management',
        experience: '4 Years',
        about: 'Experienced Chef with Over 4 Years of Culinary Excellence, Specializing in Heart-Healthy Gourmet Meals. Known for Personalized Service and a Commitment to Fresh, Organic Ingredients',
        fees: 300,
        address: {
            line1: 'Ghaziabad, Uttar Pradesh, 20100, India.'
        }
    },
    {
        _id: 'doc3',
        name: 'Neha Dhawan',
        image: doc3,
        speciality: 'The North East Spice Expert',
        degree: 'Hotel Management',
        experience: '6 Years',
        about: 'Highly skilled chef with over a decade of experience, specializing in authentic regional cuisine. Renowned for a dedication to freshly sourced ingredients and innovative culinary techniques',
        fees: 400,
        address: {
            line1: 'Khagaria, Bihar, 851216, India.'
        }
    },
    {
        _id: 'doc4',
        name: 'Amarjit Singh ',
        image: doc4,
        speciality: 'The Punjabi Spice Expert',
        degree: 'Hotel Management',
        experience: '3 Years',
        about: 'Respected Chef with Over 3 Years in the Culinary Arts, Specializing in Traditional Indian Cuisine. Celebrated for His Innovative Approach and Dedication to Authentic Flavors.',
        fees: 40,
        address: {
            line1: 'New Delhi, Delhi, 110001, India.'
        }
    },
    {
        _id: 'doc5',
        name: 'Rajan Patel',
        image: doc5,
        speciality: 'Asias Best Male Chef',
        degree: 'Hotel Management',
        experience: '20 Years',
        about: 'An accomplished professional with extensive experience, celebrated for innovation and a dedication to excellence in his field." How does that work?',
        fees: 500,
        address: {
            line1: 'Bulandshahr, Uttar Pradesh, 203001, India.'
        }
    },
]