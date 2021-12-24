const useEmailLocalStorage = (initialEmail) => {
  const key = "email";
  const [email, setEmail] = useState(initialEmail);

  const setEmailExtended = (email) => {
    try {
      window.localStorage.setItem(key, email);
      setEmail(email);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let emailStore;
    try {
      emailStore = window.localStorage.getItem(key);
      if (emailStore == null) {
        emailStore = initialEmail;
      }
    } catch (error) {
      console.log(error);
      emailStore = initialEmail;
    }
    setEmail(emailStore);
  }, []); // --- persist value on mount

  return [email, setEmailExtended];
};

export default useEmailLocalStorage;
