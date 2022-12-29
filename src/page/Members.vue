<template>
  <Navbar />
  <section
    class="bg-slate-100 transition duration-100 ease-in-out "
  >
    <div class="container pt-24 ">
      <h1>Members/<b>Kelas</b></h1>
      <div class="">
        <div class="grid grid-cols-3 gap-4 pt-4">
          <CardComponents :members="{ nama: 'Agung Pratama', ig:'agungpratama200105',foto:'members/users-1.jpg'}"/>
          <CardComponents :members="{ nama: 'Aldi Kurniawan', ig:'_aldikrniawn',foto:'members/users-none.jpg'}"/>
          <CardComponents :members="{ nama: 'Dela Prilisia Yulidistira', ig:'delaprilisia',foto:'members/users-3.jpg'}"/>
          <CardComponents :members="{ nama: 'Desy Sabrina', ig:'myproo_ob',foto:'members/users-4.jpg'}"/>
          <CardComponents :members="{ nama: 'Dwi Datirah', ig:'iira_only_',foto:'members/users-none.jpg'}"/>
          <CardComponents :members="{ nama: 'Evelina', ig:'evelinsss_',foto:'members/users-6.jpg'}"/>
          <CardComponents :members="{ nama: 'Farhan Mulyaputra', ig:'xyprhnn_',foto:'members/users-7.jpg'}"/>
          <CardComponents :members="{ nama: 'Firman Darmawan', ig:'firmandarmawan7',foto:'members/users-8.jpg'}"/>
          <CardComponents :members="{ nama: 'Fito', ig:'fitoch7',foto:'members/users-9.jpg'}"/>
          <CardComponents :members="{ nama: 'Iman Kurniawan', ig:'iman.kurniawan__',foto:'members/users-none.jpg'}"/>
          <CardComponents :members="{ nama: 'Kornelius Niko E.', ig:'korneliusniko.e',foto:'members/users-11.jpg'}"/>
          <CardComponents :members="{ nama: 'M. Triagus Rudiansyah', ig:'triagus999',foto:'members/users-12.jpg'}"/>
          <CardComponents :members="{ nama: 'Muhammad Akbar Al Zikra', ig:'akbaralzikra',foto:'members/users-13.jpg'}"/>
          <CardComponents :members="{ nama: 'Mohammad Syafii Syaputra', ig:'5y4fii',foto:'members/users-14.jpg'}"/>
          <CardComponents :members="{ nama: 'Mohd. Ikhsan Sadillah', ig:'_m_ikhsan_s_',foto:'members/users-15.jpg'}"/>
          <CardComponents :members="{ nama: 'Muh. Rizkal Setiawan', ig:'muh.rizkallsetiawan',foto:'members/users-16.jpg'}"/>
          <CardComponents :members="{ nama: 'M. Dimas Yudi Pratama', ig:'dimasyudi_07',foto:'members/users-17.jpg'}"/>
          <CardComponents :members="{ nama: 'Muhammad Dwi Ramdan', ig:'',foto:'members/users-none.jpg'}"/>
          <CardComponents :members="{ nama: 'M. Fadillah Atha Wardana', ig:'fadillathw._',foto:'members/users-19.jpg'}"/>
          <CardComponents :members="{ nama: 'Muhammad Farhan Zalwa', ig:'mhdfarhan_4',foto:'members/users-20.jpg'}"/>
          <CardComponents :members="{ nama: 'Muhammad Ilham', ig:'',foto:'members/users-none.jpg'}"/>
          <CardComponents :members="{ nama: 'Muhammad Sofian', ig:'mhd_sofian__',foto:'members/users-22.jpg'}"/>
          <CardComponents :members="{ nama: 'Raihan Naufal Yanda', ig:'rayhannaufallyanda',foto:'members/users-none.jpg'}"/>
          <CardComponents :members="{ nama: 'Regi Wiyanda', ig:'regiwynd2',foto:'members/users-24.jpg'}"/>
          <CardComponents :members="{ nama: 'Rendi', ig:'rendi_dimor',foto:'members/users-25.jpg'}"/>
          <CardComponents :members="{ nama: 'Romy Andrian', ig:'romyadrn_',foto:'members/users-26.jpg'}"/>
          <CardComponents :members="{ nama: 'Shalwat Nabila Arrafi', ig:'elfi_andrew_78',foto:'members/users-27.jpg'}"/>
          <CardComponents :members="{ nama: 'Teddy Ramadhan', ig:'tdy_ramadhan',foto:'members/users-none.jpg'}"/>
          <CardComponents :members="{ nama: 'Tinta Thania Nadhilah Putri', ig:'tinthnia',foto:'members/users-29.jpg'}"/>
          <CardComponents :members="{ nama: 'Wahyu', ig:'binaramerta._',foto:'members/users-none.jpg'}"/>
          <CardComponents :members="{ nama: 'Yoga Dwi Pujakusuma', ig:'yoga_dpk',foto:'members/users-31.jpg'}"/>
          <CardComponents :members="{ nama: 'Yurisha Anindya', ig:'yurisha_anindya',foto:'members/users-32.jpg'}"/>
          <CardComponents :members="{ nama: 'Zhea Aulia', ig:'zheaulis',foto:'members/users-33.jpg'}"/>
          
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CardComponents from '../components/CardComponents.vue';
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar,CardComponents },
};
</script>

<style></style>
