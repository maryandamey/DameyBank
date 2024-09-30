<?php
session_start();
include('conf/config.php');
include('conf/checklogin.php');
check_login();
$admin_id = $_SESSION['admin_id'];

if (isset($_POST['approve_loan'])) {
  $loan_id = $_POST['loan_id'];
  // Update the status of the loan to 'approved' and set the admin_id
  $stmt = $mysqli->prepare("UPDATE loans SET status = 'approved', admin_id = ? WHERE loan_id = ?");
  $stmt->bind_param("ii", $admin_id, $loan_id);
  $stmt->execute();
  $stmt->close();
}

if (isset($_POST['reject_loan'])) {
  $loan_id = $_POST['loan_id'];
  // Update the status of the loan to 'rejected' and set the admin_id
  $stmt = $mysqli->prepare("UPDATE loans SET status = 'rejected', admin_id = ? WHERE loan_id = ?");
  $stmt->bind_param("ii", $admin_id, $loan_id);
  $stmt->execute();
  $stmt->close();
}

// Fetch all loan requests with client details
$ret = "SELECT loans.loan_id, loans.client_id, loans.amount, loans.purpose, loans.status, ib_clients.name AS client_name, ib_clients.email AS client_email
        FROM loans
        JOIN ib_clients ON loans.client_id = ib_clients.client_id";
$stmt = $mysqli->prepare($ret);
$stmt->execute();
$res = $stmt->get_result();

// Fetch each row from the result set and store in an array
$loans = [];
while ($row = $res->fetch_assoc()) {
  $loans[] = $row;
}
$stmt->close();
?>

<!DOCTYPE html>
<html>
<meta http-equiv="content-type" content="text/html;charset=utf-8" />
<?php include("dist/_partials/head.php"); ?>

<body class="hold-transition sidebar-mini">
  <div class="wrapper">
    <!-- Navbar -->
    <?php include("dist/_partials/nav.php"); ?>
    <!-- /.navbar -->

    <!-- Main Sidebar Container -->
    <?php include("dist/_partials/sidebar.php"); ?>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1>Manage Loan Requests</h1>
            </div>
          </div>
        </div><!-- /.container-fluid -->
      </section>

      <!-- Main content -->
      <section class="content">
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-body">
                <table class="table table-hover table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Client Name</th>
                      <th>Client Email</th>
                      <th>Amount</th>
                      <th>Purpose</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <?php foreach ($loans as $cnt => $row) { ?>
                      <tr>
                        <td><?php echo $cnt + 1; ?></td>
                        <td><?php echo $row['client_name']; ?></td>
                        <td><?php echo $row['client_email']; ?></td>
                        <td><?php echo $row['amount']; ?></td>
                        <td><?php echo $row['purpose']; ?></td>
                        <td><?php echo $row['status']; ?></td>
                        <td>
                          <form method="post" onsubmit="return confirm('Are you sure?');">
                            <input type="hidden" name="loan_id" value="<?php echo $row['loan_id']; ?>">
                            <?php if ($row['status'] == 'pending') { ?>
                              <button type="submit" class="btn btn-success" name="approve_loan">Approve</button>
                              <button type="submit" class="btn btn-danger" name="reject_loan">Reject</button>
                            <?php } else { ?>
                              <button type="button" class="btn btn-secondary" disabled>Action Taken</button>
                            <?php } ?>
                          </form>
                        </td>
                      </tr>
                    <?php } ?>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->
    <?php include("dist/_partials/footer.php"); ?>

    <!-- Control Sidebar -->
    <aside class="control-sidebar control-sidebar-dark">
      <!-- Control sidebar content goes here -->
    </aside>
    <!-- /.control-sidebar -->
  </div>
  <!-- ./wrapper -->

  <!-- jQuery -->
  <script src="plugins/jquery/jquery.min.js"></script>
  <!-- Bootstrap 4 -->
  <script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
  <!-- AdminLTE App -->
  <script src="dist/js/adminlte.min.js"></script>
  <!-- AdminLTE for demo purposes -->
  <script src="dist/js/demo.js"></script>
</body>

</html>