import './App.css';
import Avatar from '@mui/material/Avatar';
import EditIcon from '@mui/icons-material/Edit';
import Switch from '@mui/material/Switch';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import SettingsIcon from '@mui/icons-material/Settings';
import CabinIcon from '@mui/icons-material/Cabin';
import ShareIcon from '@mui/icons-material/Share';

function App() {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  return (
    <div className=' p-10  text-sm bg-green-50'>
      <div className=' flex  lg:flex-row flex-col'>
        <div className=' lg:w-1/3  shadow-2xl bg-white'>

          <div className=' flex justify-center mt-5'>
        <Avatar 
        src="/broken-image.jpg"
        sx={{ width: 86, height: 86 }}
         />
         </div>

        <div className='p-4'>
         <div className=' text-center flex flex-col items-center'>
            <p className=' font-bold text-xl'>Mitramas Infosys Global</p>
            <p className=' text-gray-400'>Layanan IT</p>
            <div className='flex items-center my-2'>
                <EditIcon style={{ color:"green" }} />
                <p className='ml-2' style={{ color : "green" }}>Sunting profil</p>
            </div>
         </div>

        <div className=' mt-5'>
          <p className=' text-gray-400'>Status Perusahaan</p>
          <div className='flex items-center relative'>
            <p className=' my-2 font-bold' style={{ color : "green" }}>Aktif</p>
            <div className=' absolute right-0'>
            <Switch style={{ color : "green" }} {...label} defaultChecked />
            </div>
          </div>
          <p className=' text-gray-400'>Singkatan</p>
          <p className='my-2 '>MIG</p>
          <p className='text-gray-400'>Alamat Perusahaan</p>
          <p className='my-2 '>JL. Tebet Raya No.42,Jakarta Selatan</p>
          <p className='text-gray-400'>Penanggung Jawab (PIC)</p>
          <p className='my-2 '>John Doe</p>
          <p className='text-gray-400'>Tanggal PKP</p>
          <p className='my-2 '>03 Maret 2021</p>
          <p className='text-gray-400'>E-mail</p>
          <div style={{ color : "green" }} className=' flex items-center my-2'>
            <EmailIcon  />
            <p className=' ml-2 underline'>mig@mitrasolusi.group</p>
          </div>
          <p className='text-gray-400'>No. Telp</p>
          <div style={{ color : "green" }} className=' flex items-center my-2'>
            <LocalPhoneIcon  />
            <p className=' ml-2'>021-5678-1234</p>
          </div>
          <p className='text-gray-400'>Situs Web</p>
          <div style={{ color : "green" }} className=' flex items-center my-2'>
            <EmailIcon  />
            <p className=' ml-2 underline'>mitramas.com</p>
          </div>
        </div>
        </div>

        </div>

      <div className=' w-full  lg:mt-0 mt-10'>
        <div className=' lg:mx-10 bg-white shadow-2xl relative p-5'>
          <div className=' flex items-center'>
            <p className=' font-bold'>Lokasi</p>
            <p style={{ color : "green" }} className="absolute right-0 mr-5">Lihat semua</p>
          </div>
          <div className='mt-3 flex flex-col lg:flex-row items-center text-white'>
            <div className='lg:w-1/3 w-full bg-green-800 flex items-center relative h-16 rounded-xl'>
                <MapsHomeWorkIcon sx={{ marginLeft:"12px" }} />
                <div className=' absolute right-0 mr-3'>
                  <p className='text-2xl'>20</p>
                  <p>Induk</p>
                </div>
            </div>
            <div className='lg:w-1/3 lg:mt-0 mt-3 w-full bg-green-800 flex items-center relative h-16 mx-3 rounded-xl'>
                <SettingsIcon sx={{ marginLeft:"12px" }} />
                <div className=' absolute right-0 mr-3'>
                  <p className='text-2xl ml-24'>3</p>
                  <p className=''>Sub Lokasi Level 1</p>
                </div>
            </div>
            <div className='lg:w-1/3 lg:mt-0 mt-3 w-full bg-green-800 flex items-center relative h-16 rounded-xl'>
                <CabinIcon sx={{ marginLeft:"12px" }} />
                <div className=' absolute right-0 mr-3'>
                  <p className='text-2xl ml-24'>1</p>
                  <p>Sub Lokasi Level 2</p>
                </div>
            </div>
          </div>
        </div>

        <div className='flex lg:flex-row flex-col mx-10 mt-10 '>
          <div className='w-full'>
        <div className='bg-white shadow-2xl lg:w-10/12 p-5'>
          <div className=' flex lg:flex-row flex-col items-center relative'>
            <p className=' font-bold'>Akun Bank</p>
            <button className='bg-green-700 rounded-lg text-white p-2 lg:absolute right-0 flex justify-center items-center'> +  Tambah Akun Bank</button>
          </div>
        </div>

        <div className='bg-white shadow-2xl lg:w-10/12  p-5 mt-10'>
          <div className=' flex items-center relative'>
            <p className=' font-bold'>Relasi</p>
            <p className='absolute right-0' style={{ color :"green" }}>Lihat semua</p>
          </div>
          <div>
            <div className=' flex items-center mt-3'>
              <ShareIcon />
              <div className='ml-2'>
                <p className=' font-bold text-2xl'>20</p>
                <p>Memiliki</p>
              </div>
            </div>
            <div className=' flex items-center mt-3'>
              <ShareIcon />
              <div className='ml-2'>
                <p className=' font-bold text-2xl'>108</p>
                <p>Menggunakan</p>
              </div>
            </div>
            <div className=' flex items-center mt-3'>
              <ShareIcon />
              <div className='ml-2'>
                <p className=' font-bold text-2xl'>67</p>
                <p>Meminjam</p>
              </div>
            </div>
          </div>
        </div>

        </div>
        <div style={{ height:"520px" }} className='bg-white shadow-2xl lg:mt-0 mt-10 lg:w-10/12 p-5 shadow-2xl '>
         <p className=' font-bold'>Aktivitas</p>
         <div className=' mt-4'>
          <p>Yusron baru saja menambahkan lokasi baru kantor Cabang Jagakarsa</p>
          <p className=' text-gray-400'>Hari ini , 08:00</p>
         </div>
         <div className=' mt-4'>
          <p>Yusron baru saja menambahkan lokasi baru kantor Cabang Jagakarsa</p>
          <p className=' text-gray-400'>Hari ini , 08:00</p>
         </div>
         <div className=' mt-4'>
          <p>Yusron baru saja menambahkan lokasi baru kantor Cabang Jagakarsa</p>
          <p className=' text-gray-400'>Hari ini , 08:00</p>
         </div>
        </div>
        

      </div>

      </div>

      </div>
    </div>
  );
}

export default App;
