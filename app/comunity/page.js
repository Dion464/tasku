
import Image from 'next/image';


import classes from './page.module.css';

export default function CommunityPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          One think that brings us here is : <span className={classes.highlight}>Tasks</span>
        </h1>
        <p>Join our community and share your favorite tasks !</p>
      </header>
      <main className={classes.main}>
        <h2>Community Perks</h2>

        <ul className={classes.perks}>
          
        
          <li>
            <p>Participate in exclusive events</p>
          </li>
        </ul>
      </main>
    </>
  );
}