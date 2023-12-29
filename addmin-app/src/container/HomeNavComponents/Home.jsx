import { FaRupeeSign } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { TbCategory } from "react-icons/tb";
import { IoMdBasket } from "react-icons/io";
import { motion } from 'framer-motion';
import './Home.css';
import  { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
const Home = () => {

  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7'],
    datasets: [{
      label: 'Mumbai',
      barPercentage: 0.5,
      barThickness: 6,
      maxBarThickness: 8,
      minBarLength: 2,
      data:[20, 30, 60, 70, 40, 50, 10],
      backgroundColor: '#3281FF',
      borderColor: '#3281FF',
      borderWidth: 1,
    },
      {
      label: 'Delhi',
      barPercentage: 0.5,
      barThickness: 6,
      maxBarThickness: 8,
      minBarLength: 2,
      data: [10, 50, 40, 70, 20, 60, 30],
      backgroundColor: '#4ADF5E',
      borderColor: '#4ADF5E',
      borderWidth: 1,
      },
      {
        label: 'Kolkatta',
        barPercentage: 0.5,
        barThickness: 6,
        maxBarThickness: 8,
        minBarLength: 2,
        data: [60, 50, 30, 20, 10, 40, 70],
        backgroundColor: '#FF7151',
        borderColor: '#FF7151',
        borderWidth: 1,
      },
      {
        label: 'Chennai',
        barPercentage: 0.5,
        barThickness: 6,
        maxBarThickness: 8,
        minBarLength: 2,
        data:[40, 50, 60, 70, 30, 10, 20],
        backgroundColor: '#D595E5',
        borderColor: '#D595E5',
        borderWidth: 1,
      }],
  };
  const options = {
    scales: {
      x: {
        type: 'category',
        position: 'bottom',
      },
      y: {
        type: 'linear',
        position: 'left',
      },
    },
  };
  const chartRef = useRef(null);
  const myChartRef = useRef(null);


  useEffect(() => {
    // Check if chartRef.current is not null before trying to access getContext
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      // Destroy existing chart instance if it exists
      if (myChartRef.current) {
        myChartRef.current.destroy();
      }

      myChartRef.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              
              target: 'origin',
              label: 'Sales',
                above: 'rgb(255, 0, 0)',   // Area will be red above the origin
                below: 'rgb(0, 0, 255)',   // Area will be blue below the origin
              data: [80, 120, 110, 60, 50, 20, 70, 10, 30, 90, 100, 40],
              
            },
          ],
        },
        options: {
          scales: {
            x: {
              type: 'category', // Use 'category' scale for discrete labels like months
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
              position: 'bottom',
            },
            y: {
              type: 'linear',
              position: 'left',
            },
          },
          plugins: {
            legend: {
              display: true,
              position: 'top',
            },
          },
        },
      });
    }

    // Cleanup: Destroy the chart when the component is unmounted
    return () => {
      if (myChartRef.current) {
        myChartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="dashboard" style={{ backgroundColor: '#F8F9FA', height: '100vh', width: '100%' , padding: '0px', overflow: 'hidden'}}>
      <div>
      <h1 style={{ paddingTop: '2rem' , paddingLeft: '2rem' , paddingRight: '2rem',margin:'0px' , fontSize: '30px' , fontStyle: 'Roboto, Helvetica, Arial, sans-serif' }}>Dashboard</h1>
      <p style={{ padding: '2rem' ,paddingTop: '5px' ,  fontStyle: 'Roboto, Helvetica, Arial, sans-serif' }}>Whole data about your business here</p>  
     </div>
      <div style={{ display: 'flex' , flexDirection: 'row',gap: '1.5rem' , padding: '1rem' }}>
        <motion.div
          whileHover={{ y:-5}}
          transition={{ duration: 0.5, type: 'spring' }}
          exit={{x:0}}
          style={{ display: 'flex', flexDirection: 'row', gap: '15px', width: '100%', padding: '2rem', backgroundColor: 'white', borderRadius: '10px' }}>
          <FaRupeeSign style={{
            fontSize: '3rem', color: '#088178', backgroundColor: '#CEE6E4', padding: '10px', borderRadius: '50%'
          }} />
          <div>
            <h4 style={{  fontFamily: 'Roboto, Helvetica, Arial, sans-serif' }}>Revenue</h4>
            <p style={{ fontFamily: 'Roboto, Helvetica, Arial, sans-serif', marginBottom: '5px', fontWeight: '500', fontSize: '1.5rem', color: '#707789', }}>₹13,456.5</p>
            <p style={{ fontFamily: 'Roboto, Helvetica, Arial, sans-serif', marginBottom: '5px', fontWeight: '500',  color: '#707789', }}>Shipping fees are not inc.</p>
          </div>
        </motion.div>
        <motion.div
           whileHover={{ y:-5}}
           transition={{ duration: 0.5, type: 'spring' }}
           exit={{x:0}}
          style={{ display: 'flex', flexDirection: 'row', gap: '15px', width: '100%', padding: '2rem', backgroundColor: 'white', borderRadius: '10px' }}>
        <FaTruck style={{
            fontSize: '3rem', color: '#00B517', backgroundColor: '#CCF0D1', padding: '10px', borderRadius: '50%'}}/>
        <div>
            <h4 style={{  fontFamily: 'Roboto, Helvetica, Arial, sans-serif' }}>Orders</h4>
            <p style={{ fontFamily: 'Roboto, Helvetica, Arial, sans-serif', marginBottom: '5px', fontWeight: '500', fontSize: '1.5rem', color: '#707789', }}>53</p>
            <p style={{ fontFamily: 'Roboto, Helvetica, Arial, sans-serif', marginBottom: '5px', fontWeight: '500',  color: '#707789', }}>Excluding orders in transit</p>
          </div>
        </motion.div>
        <motion.div
           whileHover={{ y:-5}}
           transition={{ duration: 0.5, type: 'spring' }}
           exit={{x:0}}
        
          style={{ display: 'flex', flexDirection: 'row', gap: '15px', width: '100%', padding: '2rem', backgroundColor: 'white', borderRadius: '10px' }}>
        <TbCategory style={{
            fontSize: '3rem', color: '#FDA850', backgroundColor: '#FFE8D0', padding: '10px', borderRadius: '50%'}}/>
        <div>
            <h4 style={{  fontFamily: 'Roboto, Helvetica, Arial, sans-serif' }}>Products</h4>
            <p style={{ fontFamily: 'Roboto, Helvetica, Arial, sans-serif', marginBottom: '5px', fontWeight: '500', fontSize: '1.5rem', color: '#707789', }}>9</p>
            <p style={{ fontFamily: 'Roboto, Helvetica, Arial, sans-serif', marginBottom: '5px', fontWeight: '500',  color: '#707789', }}>In 19 Categories</p>
          </div>
        </motion.div>
        <motion.div
           whileHover={{ y:-5}}
           transition={{ duration: 0.5, type: 'spring' }}
           exit={{x:0}}
          style={{ display: 'flex', flexDirection: 'row', gap: '15px', width: '100%', padding: '2rem', backgroundColor: 'white', borderRadius: '10px' }}>
        <IoMdBasket style={{
            fontSize: '3rem', color: '#0DCAF0', backgroundColor: '#CFF4E8', padding: '10px', borderRadius: '50%'}}/>
        <div>
            <h4 style={{  fontFamily: 'Roboto, Helvetica, Arial, sans-serif' }}>Revenue</h4>
            <p style={{ fontFamily: 'Roboto, Helvetica, Arial, sans-serif', marginBottom: '5px', fontWeight: '500', fontSize: '1.5rem', color: '#707789', }}>₹6,982</p>
            <p style={{ fontFamily: 'Roboto, Helvetica, Arial, sans-serif', marginBottom: '5px', fontWeight: '500',  color: '#707789', }}>Based in your local time.</p>
          </div>
        </motion.div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '15px',padding: '1rem' }} >
      <div style={{ width: '100%', padding: '2rem' , backgroundColor: 'white', borderRadius: '10px' }}>
      <h2>Sale statistics</h2>
      <canvas ref={chartRef}></canvas>
        </div>
        <div style={{ width: '100%', padding: '2rem' , backgroundColor: 'white', borderRadius: '10px' }}>
        <h2>My Bar Chart</h2>
      <Bar data={data} style={{ width: '45%', height: '50%' }} options={options} />
</div>
     </div>

    </div>
  )
}

export default Home
