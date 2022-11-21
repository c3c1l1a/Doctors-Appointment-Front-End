import doctor1 from '../../images/mock/1.png';
import doctor2 from '../../images/mock/2.png';
import doctor3 from '../../images/mock/3.png';
import doctor4 from '../../images/mock/4.png';
import doctor5 from '../../images/mock/5.png';
import doctor6 from '../../images/mock/6.png';

export default (i) => {
  const doctors = [
    {
      src: doctor1,
      color: '#99c110',
    },
    {
      src: doctor2,
      color: '#ffc600',
    },
    {
      src: doctor3,
      color: '#252525',
    },
    {
      src: doctor4,
      color: '#10bbb5',
    },
    {
      src: doctor5,
      color: '#99c110',
    },
    {
      src: doctor6,
      color: '#ffc600',
    },
  ];

  return doctors[i];
};
