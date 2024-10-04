/* eslint-disable import/order */
/* eslint-disable padding-line-between-statements */

import { useState, useEffect } from "react";
import { getCurrentUser } from "../services/AuthService";
import { IUser } from "../types";


export const useUser = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getCurrentUser(); // API call to get the current user
        setUser(userData);
      } catch (error) {
        setUser(null); // No user is logged in or an error occurred
      } finally {
        setLoading(false); // Loading is complete
      }
    };

    fetchUser();
  }, []);

  return { user, loading };
};
