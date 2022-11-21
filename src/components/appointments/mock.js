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
      bgColor: '#99c110',
      color: '#ffffff',
    },
    {
      src: doctor2,
      bgColor: '#ffc600',
      color: '#ffffff',
    },
    {
      src: doctor3,
      bgColor: '#252525',
      color: '#ffffff',
    },
    {
      src: doctor4,
      bgColor: '#10bbb5',
      color: '#ffffff',
    },
    {
      src: doctor5,
      bgColor: '#99c110',
      color: '#ffffff',
    },
    {
      src: doctor6,
      bgColor: '#ffc600',
      color: '#ffffff',
    },
  ];

  return doctors[i];
};
