-- Create a function to reset member statuses
CREATE OR REPLACE FUNCTION reset_member_statuses()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Reset status to null for members whose status_updated_at is older than 1 hour
  UPDATE member 
  SET status = NULL 
  WHERE status IS NOT NULL 
  AND status_updated_at < NOW() - INTERVAL '1 hour';
  
  -- Log the operation
  RAISE NOTICE 'Reset member statuses completed at %', NOW();
END;
$$;

-- Create the cron job to run every hour
SELECT cron.schedule(
  'reset-member-statuses',
  '0 * * * *',  -- Every hour at minute 0
  'SELECT reset_member_statuses();'
); 