
const app = Vue.createApp({
  data() {
    return {
      name: '',
      newComment: '',
      comments: [],
      showSuccessMessage: false,
      showErrorMessage: false
    };
  },
  methods: {
    react(type) {
      alert(`You reacted with ${type}!`);
    },
    addComment() {
      if (this.name.trim() && this.newComment.trim()) {
        // Add comment
        this.comments.push({ name: this.name, text: this.newComment });

        // Clear inputs
        this.name = '';
        this.newComment = '';

        // Show success message
        this.showSuccessMessage = true;
        this.showErrorMessage = false;

        // Hide success message after 3 seconds
        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 3000);
      } else {
        // Show error message
        this.showErrorMessage = true;
        this.showSuccessMessage = false;

        // Hide error message after 3 seconds
        setTimeout(() => {
          this.showErrorMessage = false;
        }, 3000);
      }
    }
  }
});

app.mount('#app2');
