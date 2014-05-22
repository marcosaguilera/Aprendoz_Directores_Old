//importar librerias y complementos
import com.aprendoz_test.*;
import org.hibernate.Session;
import com.wavemaker.runtime.RuntimeAccess;
import com.wavemaker.runtime.server.DownloadResponse;
import java.net.URL;
import net.sf.jasperreports.engine.util.JRLoader;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import java.io.ByteArrayOutputStream;
import java.io.ByteArrayInputStream;
import java.util.Map;
import java.util.HashMap;
import com.wavemaker.runtime.server.ParamName;
import org.springframework.mail.javamail.ConfigurableMimeFileTypeMap;


import net.sf.jasperreports.engine.JRResultSetDataSource;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.design.JasperDesign;
import net.sf.jasperreports.engine.xml.JRXmlLoader;
import java.util.*;
import java.io.*;
import java.awt.*;
import net.sf.jasperreports.*;
import com.wavemaker.runtime.RuntimeAccess;
import com.wavemaker.runtime.server.ParamName;

public class horario extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {
     public DownloadResponse getReport(String idc, String idsy, String sem) throws Exception {
       System.out.println("Curso: "+idc);
       System.out.println("Año: "+idsy);
       System.out.println("Semana: "+sem);
       //convirtiendo String a Integer
       int idsy1= Integer.valueOf(idsy);
       int idsem= Integer.valueOf(sem);
       System.out.println("---------------------------");
  
       System.out.println("Curso: "+idc);
       System.out.println("Año: "+idsy1);
       System.out.println("Semana: "+idsem);
       
       System.out.println("---------------------------");
       DownloadResponse ret= new DownloadResponse();
       ConfigurableMimeFileTypeMap mimeFileTypeMap = new ConfigurableMimeFileTypeMap();
       
       try {
          Aprendoz_test service = (Aprendoz_test) RuntimeAccess.getInstance().getService(Aprendoz_test.class);
          service.begin();
          Session session= service.getDataServiceManager().getSession();
          
          //enviar parametros al reporte
          Map parameters= new HashMap();
          parameters.put("curso", idc);
          parameters.put("sy", idsy1);
          parameters.put("semana", idsem);

          System.out.println("capturados!");
          //direccion del archivo Jasper
          URL fileUrl = this.getClass().getResource("horarios.jasper");
          System.out.println("paso 1 ");
          //para cargar el jasper
          JasperReport report2 = (JasperReport)JRLoader.loadObject(fileUrl);
          System.out.println("paso 2 ");
          //cargar conexion de la base de datos al reporte y el archivo Jasper
          JasperPrint jasperPrint = JasperFillManager.fillReport(report2,parameters,session.connection());
          System.out.println("paso 3 ");
          //exportar a pdf
          ByteArrayOutputStream out= new ByteArrayOutputStream();
          JasperExportManager.exportReportToPdfStream(jasperPrint, out);
          System.out.println("paso 4 ");
          //cargar pdf como una respuesta de descarga
          ret.setContentType(mimeFileTypeMap.getContentType("horarios.jasper"));
          ret.setContents(new ByteArrayInputStream(out.toByteArray()));
          ret.setFileName("Horario_Clases_Curso: "+idc+".pdf");
          System.out.println("paso 5 ");
       } catch(Exception e) {
          System.out.println("Error creando el PDF");
          e.printStackTrace();
       }
       return ret;
    }

}
