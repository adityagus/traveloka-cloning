
// components/Card.js
import PaymentCard from '@components/presentational/PaymentCard';



const CardList = ({ data }) => {
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-2 w-full" style={{ 'width': "320px" }}>
      {data.map((item) => (
        <PaymentCard icon={item.icon}/>
      ))}
    </div>
  );
};

export default CardList;
