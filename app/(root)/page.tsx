import HeaderBox from "@/components/HeaderBox"
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";


const Home = () => {
  const loggedIn = { firstName: 'Kwon', lastName:'Bomin', email:'kwon32@gmail.com'};

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Gust'}
            subtext="계좌와 거래 내역을 편리하게 접근하고 관리할 수 있습니다."
          />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250}
          />
        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance:123.50}, {currentBalance:500.00}]}
      />
    </section>
  )
}

export default Home