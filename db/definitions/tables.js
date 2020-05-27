const store = {
  table: "sms_store",
  columns: ['id',
            'domain',
            'room_id',
            'from_number',
            'to_number',
            'invited_users',
            'kazoo_id',
            'created'],
  where: `domain = 'vinix.im' `
};

const logs = {
  table: "log_messages",
  columns: ['id',
            'sms_store_id',
            'description',
            'bandwidth_status',
            'created']
};

module.exports = {store, logs}