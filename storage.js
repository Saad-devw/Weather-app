class str {
  constructor () {
    this.country;
    this.defaultCountry = 'Morocco';
  }

  getCountry() {
    if( localStorage.getItem('country') === null ){
      this.country = this.defaultCountry;

    }else{
      this.country = localStorage.getItem('country');
    }

    return {
      country:this.country
    }
  }

  setCountry(cntr) {
    localStorage.setItem('country',cntr);
  }
}