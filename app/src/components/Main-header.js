
import Link from "next/link";
import Image from "next/image";

import classes from "./main-header.module.css"

export default function MainHeader (){
    return (
<header className={classes.header}>
    
        <Link  className={classes.logo}  href="/" >
            <Image
                src="/assets/images/logo.png" // Absolute path starting with a leading slash
                alt="Logo"
                width={500} // Specify width
                height={300} // Specify height
            />
            ToDoApp
        </Link>
        <nav className={classes.nav}>
            <ul>
                
                
                
                <li>
                
                <Link href="/meals/share"> Share youre tasks </Link>

                
                </li>
                <li>
                  <Link href="/comunity"> Youre coumunity
                </Link>
                    </li>
                    </ul>
        </nav>
    </header>
    
    ); 
} 