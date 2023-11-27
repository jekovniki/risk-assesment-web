import { useEffect } from 'react';
import { SUCCESSFUL_FORM } from '../utils/messages';

function useServiceEffect(serviceConfig, showNotification, setLoading, getAll, handleServiceNotificationError) {
  useEffect(() => {
    const { service, successMessage = SUCCESSFUL_FORM, closeForm } = serviceConfig;
    if (service?.result?.success === true) {
      showNotification(successMessage, 'success');
      if (closeForm) closeForm();
      setLoading(false);
      getAll();
    }

    if (service?.error) {
      handleServiceNotificationError(service.error, setLoading);
    }
  }, [serviceConfig.service.result, serviceConfig.service.error]);
}

export default useServiceEffect;
