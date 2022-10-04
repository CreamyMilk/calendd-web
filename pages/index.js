import Image from 'next/image'
import { useSession, signIn  } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()
  console.log("Session",session)
  return (
    <>
    <main>
      <section className="page">
        <div className="cta">
          <h1>
            Drop Your ENS
          </h1>

          <p>
            Collect Ethereum addresses from Twitter threads
            Send a DM to everyone who has replied
            <small> (coming soon) </small>
          </p>

          <button className="custom_button" onClick={() => signIn()}>
            {!session ? "Sign In With Twitter":`🥹 Hello ${session.user.name}`}
          
          </button>

          <button className="custom_button learn-more">
            Learn More
          </button>
        </div>

        <div
          className="banner-image">
          <Image
            width={1239}
            height={798}
            layout={"intrinsic"}
            src="https://dropyourens.w1nt3r.xyz/hero.png" alt="sadas" />
        </div>

      </section>

      <div className="faq-section">

        <h1>FAQ</h1>
        <QuestionTag
          question=" What does it mean to 'Drop ENS ?"
          answer="Drop your ENS is a viral growth tactic to spread awareness of your product on Twitter by asking your followers and their friends to reply to your tweet with their ENS address" />


        <QuestionTag
          question=" What is ENS? "
          answer="ENS is Ethereum Name Serivice. It's a way to add a human-readable domain name to any Ethereum address. For example, vitalik.eth is resolved to 0xd8da6bf26964af9d7eed9e03e53415d37aa96045." />

        <QuestionTag
          question=" Why do people make 'drop your ENS' threads?"
          answer="'Drop your ENS' is a viral growth tactic to spread awareness of your product on Twitter. It gets you more attention, causes FOMO among bystanders and creates an illusion of marketing." />

        <QuestionTag question=" How do I make a ' Drop your ENS' thread?"
          answer=" Tweet a teaser for what you are building and end it with 'drop your ens'. Here's an example." />

        <QuestionTag question=" Why does 'Drop your ENS' work?"
          answer=" People reply to the original tweet, Twitter algorithm considers the tweet of a high quality and shows it to other people." />

        <QuestionTag question=" What do I do after people 'dropped their ENS'?"
          answer=" You can collect the ENS names from the replies and resolve them to Ethereum addresses using this website. Then, you can airdrop tokens via tools like Disperse/Multisend or use services like Lanyard to create an allowlist for your project." />

        <h1>About</h1>
        <p>
          Made by @Mike-M-87 and @CreamyMilk 🍦
        </p>
      </div>
    </main>

    </>

  );
}

const QuestionTag = ({ question, answer }) => {
  return (
    <div className="QA">
      <p>
        <strong>Q:</strong> {question}
        <br />
        <strong>A:</strong>  {answer}
      </p>
    </div>
  );
}
